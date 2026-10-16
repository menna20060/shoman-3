# MTI Database Automated Backup Script for Windows (T05)
param (
    [string]$BackupDir = "e:\mti\backups",
    [string]$DbUri = $env:DATABASE_URI
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
if (-not (Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
}

$dumpFile = Join-Path $BackupDir "mti_db_$timestamp.sql"

Write-Host "Starting PostgreSQL database backup..."
if ($DbUri) {
    pg_dump $DbUri -f $dumpFile --no-owner --no-acl
    Write-Host "Database backup saved to: $dumpFile"
} else {
    Write-Warning "DATABASE_URI environment variable is not set."
}
