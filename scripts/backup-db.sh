#!/bin/bash
# MTI Database Automated Encrypted Backup Script (T05)
set -eo pipefail

BACKUP_DIR="${BACKUP_DIR:-/backups/mti}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/mti_db_${TIMESTAMP}.sql.gz"
ENCRYPTED_FILE="${BACKUP_FILE}.enc"

mkdir -p "$BACKUP_DIR"

echo "⏳ Starting PostgreSQL database backup..."
pg_dump "$DATABASE_URI" --no-owner --no-acl | gzip -9 > "$BACKUP_FILE"

if [ -n "$BACKUP_ENCRYPTION_KEY" ]; then
  echo "🔒 Encrypting backup file..."
  openssl enc -aes-256-cbc -salt -pbkdf2 -in "$BACKUP_FILE" -out "$ENCRYPTED_FILE" -pass pass:"$BACKUP_ENCRYPTION_KEY"
  rm -f "$BACKUP_FILE"
  echo "✅ Encrypted backup completed: $ENCRYPTED_FILE"
else
  echo "⚠️ Backup completed without encryption (BACKUP_ENCRYPTION_KEY not set): $BACKUP_FILE"
fi

# Retention policy: keep last 14 days
find "$BACKUP_DIR" -type f -name "mti_db_*.enc" -mtime +14 -delete
echo "🧹 Old backups pruned (retention: 14 days)."
