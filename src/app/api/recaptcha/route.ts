import { RECAPTCHA_SECRET_KEY } from './../../../functions/environmentVariables';
export async function POST(req: Request) {
  const body = await req.json();

  const { code } = body;

  if (!code) {
    return new Response(
      JSON.stringify({ message: 'Recaptcha Validation Failed, reload page' }),
      {
        status: 422,
      }
    );
  }

  try {
    // Ping the google recaptcha verify API to verify the captcha code you received
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${code}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        method: 'POST',
      }
    );
    const captchaValidation = await response.json();
    /**
       * The structure of response from the verify API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
    if (captchaValidation.success) {
      // Return 200 if everything is successful
      return new Response('Recaptcha Validation Successful');
    }

    return new Response(
      JSON.stringify({ message: 'Recaptcha Validation Failed, reload page' }),
      {
        status: 422,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Recaptcha Validation Failed, reload page' }),
      {
        status: 422,
      }
    );
  }
}
