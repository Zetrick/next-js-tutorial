import { UserFromJSONPlaceHolder } from "./index";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((user: UserFromJSONPlaceHolder) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { person: data },
  };
};

export default function PersonDetails({
  person,
}: {
  person: UserFromJSONPlaceHolder;
}) {
  return (
    <div>
      <h1 className="m-12 text-3xl prose-xl">Details</h1>
      <div>
        <p>{person.name}</p>
        <p>{person.email}</p>
      </div>
    </div>
  );
}
