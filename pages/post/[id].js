import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';


const Content = () => {
  const router = useRouter();
  return (
    <div>
        <NavBar/>
        <h2>{router.query.id}</h2>
        <p>This is a detailed dynamic routing page.</p>
    </div>
  );
}

const Post = () => {
  return (
    <div>
      <Content />
    </div>
  );
}

export default Post;
