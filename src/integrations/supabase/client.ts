// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nvboitxmrpaxufkxhcnj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Ym9pdHhtcnBheHVma3hoY25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjA3OTgsImV4cCI6MjA1NjczNjc5OH0.j2BgHJzrCOc0IIi6QjtF7wfiHZeRMe3py3c_fwY-cZs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);