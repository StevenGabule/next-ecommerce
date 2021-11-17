import Link from 'next/link';
import Layout from '../../components/layout';
export default function FirstPost() {
  return (
    <Layout>
      <h1>First post</h1>
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </Layout>
  );
}
