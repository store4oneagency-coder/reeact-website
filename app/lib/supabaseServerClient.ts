// Server-only — ne jamais importer dans des fichiers 'use client'
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialisation lazy : créé uniquement au runtime (pas au build)
let _client: SupabaseClient | null = null;

export function getSupabaseServer(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error('Variables Supabase manquantes (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)');
    _client = createClient(url, key);
  }
  return _client;
}
