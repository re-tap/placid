import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bgfwhfedjiykxmumnioo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZndoZmVkaml5a3htdW1uaW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNTg0MzMsImV4cCI6MjA2ODgzNDQzM30.D_I3ZyBNYDHCYboIJ0AsccMOfZf2O_e_Up_fPfLV8IQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
