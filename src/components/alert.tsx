import { EXAMPLE_PATH } from '../lib/constants';
import Container from './container';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a href="/api/exit-preview" className="underline hover:text-teal-300 duration-200 transition-colors">
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
