-- Add draft_response to store full draft JSON for re-render and re-download
ALTER TABLE protocols ADD COLUMN IF NOT EXISTS draft_response JSONB;
