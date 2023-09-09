
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://npdkanxqjftnhuwjlpbn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZGthbnhxamZ0bmh1d2pscGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDIxNTYsImV4cCI6MjAwOTc3ODE1Nn0.fip6OQiGu5VK7dDr53CsQC7TzaK6uCR4NTAFkIllLjQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;