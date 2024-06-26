import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wcoliirlrudnxfjdimtb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjb2xpaXJscnVkbnhmamRpbXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzg5ODcsImV4cCI6MjAzNDYxNDk4N30.VMJM3YHHF6iqyMwNhFCHHQTBsW_1CznKehbP65Kngl4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
