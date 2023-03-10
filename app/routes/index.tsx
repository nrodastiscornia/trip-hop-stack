import { Link } from "@remix-run/react";
import Typography from '@mui/material/Typography';
import { useOptionalUser } from "~/utils";
import { Button } from "@mui/material";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      <div>
        <div>
          <Typography variant="h4" component="h1" gutterBottom>
            Trip Hop Stack
          </Typography>
          <p>
            Check the README.md file for instructions on how to get this
            project deployed.
          </p>
          <div>
            {user ? (
              <Link to="/notes">View Notes for {user.email}</Link>
            ) : (
              <div>
                <Link to="/join">Sign up</Link>
                <Link to="/login">Log In</Link>
              </div>
            )}
          </div>
          <a href="https://remix.run">
            <img
              src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
              alt="Remix"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
