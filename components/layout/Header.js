import Link from "next/link";

const Header = props => {
  return (
    <nav style={{ backgroundColor: "pink" }}>
      <Link href="/"> Home </Link>
      <Link href="/new-post">Add new Post</Link>
    </nav>
  );
};

export default Header;
