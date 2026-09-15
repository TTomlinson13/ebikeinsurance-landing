<#
  deploy-ftps.ps1 — publish ebikeinsurance-landing (e-bikeins.com) to Hostinger over FTPS.
  Uses curl (built into Windows) — no lftp needed.

  USAGE (PowerShell, from the repo folder):
    $env:FTP_PASS = 'your-hostinger-ftp-password'

    # 1) First confirm which folder is e-bikeins.com's web root:
    powershell -ExecutionPolicy Bypass -File .\deploy-ftps.ps1 -List

    # 2) Then upload (defaults to the addon-domain web root):
    powershell -ExecutionPolicy Bypass -File .\deploy-ftps.ps1

  If -List shows the live files (index.html + assets\index-e1hfpPjP.js) under a
  DIFFERENT path, pass it explicitly:
    powershell -ExecutionPolicy Bypass -File .\deploy-ftps.ps1 -Remote '/public_html'
#>
param(
  [string]$Remote = '/domains/e-bikeins.com/public_html',
  [switch]$List
)

$ErrorActionPreference = 'Stop'
$FtpHost = 'ftp.hostinger.com'
$User    = 'tt@usicna.com'
$Pass    = $env:FTP_PASS
$Local   = Join-Path $PSScriptRoot 'dist'

if (-not $Pass) { Write-Error "Set FTP_PASS first:  `$env:FTP_PASS = '...'" ; exit 1 }
$cred = "${User}:${Pass}"

if ($List) {
  Write-Host "Listing candidate web roots on $FtpHost ...`n" -ForegroundColor Cyan
  foreach ($p in @('/', '/public_html/', '/domains/', '/domains/e-bikeins.com/public_html/')) {
    Write-Host "==== $p ====" -ForegroundColor Yellow
    # --ssl-reqd = explicit FTPS (AUTH TLS). Add -k only if you hit a cert error.
    curl.exe -s --ssl-reqd --user $cred "ftp://$FtpHost$p"
    Write-Host ""
  }
  Write-Host "The e-bikeins.com web root is the folder that contains index.html AND assets/ (with index-e1hfpPjP.js)." -ForegroundColor Green
  exit 0
}

if (-not (Test-Path $Local)) { Write-Error "No dist folder at $Local — run 'npm run build' first." ; exit 1 }

# refresh cache-buster
(Get-Date).ToUniversalTime().ToString('r') | Set-Content -Encoding utf8 (Join-Path $Local 'redeploy.txt')

$files = Get-ChildItem -Path $Local -Recurse -File
Write-Host "Uploading $($files.Count) files to ftp://$FtpHost$Remote ...`n" -ForegroundColor Cyan
$fail = 0
foreach ($f in $files) {
  $rel = $f.FullName.Substring($Local.Length).TrimStart('\','/').Replace('\','/')
  $url = "ftp://$FtpHost$Remote/$rel"
  curl.exe -s --ssl-reqd --ftp-create-dirs --user $cred -T "$($f.FullName)" "$url"
  if ($LASTEXITCODE -eq 0) { Write-Host "  ok   $rel" } else { Write-Host "  FAIL $rel (curl $LASTEXITCODE)" -ForegroundColor Red; $fail++ }
}
Write-Host ""
if ($fail) { Write-Host "$fail file(s) failed. If it's a TLS/cert error, re-run adding -k inside the script's curl lines." -ForegroundColor Red }
else { Write-Host "Done. Hard-refresh https://e-bikeins.com (bundle should read index-D98MUAZq.js)." -ForegroundColor Green }
