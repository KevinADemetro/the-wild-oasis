import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dyiindtjihlznlwakrko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5aWluZHRqaWhsem5sd2FrcmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4ODE1MjksImV4cCI6MjA2NjQ1NzUyOX0.skbrAclNgh39AAJEjQlL4aNvzkyQnkERnbhTGjeRYOA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
