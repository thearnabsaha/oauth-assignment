const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID="498351102642-jiihgta53k4o5fksirmfh2jtq489gnva.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

GITHUB_CLIENT_ID = "3eaa53d0f3c82f48f188";
GITHUB_CLIENT_SECRET = "b3a415f603652c3d48232a3d499acc1255840a58";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
