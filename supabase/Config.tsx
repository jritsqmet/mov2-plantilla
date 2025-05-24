import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zcfiercxnufkxzehmgmg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZmllcmN4bnVma3h6ZWhtZ21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwODg5NTcsImV4cCI6MjA2MzY2NDk1N30.0WNr1Q5NUJUEp8C0fFPaY3MGBrr3P0Ol7n0B-i-UHFI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})