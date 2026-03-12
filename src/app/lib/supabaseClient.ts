import { createClient } from '@supabase/supabase-js'

// Vai buscar os dados ao ficheiro .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cria e exporta a ligação para o resto do site usar
export const supabase = createClient(supabaseUrl, supabaseAnonKey)