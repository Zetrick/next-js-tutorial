import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MailIcon } from "@heroicons/react/solid";

export interface UserFromJSONPlaceHolder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Props {
  users: UserFromJSONPlaceHolder[];
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default function Directory({ users }: Props) {
  return (
    <div>
      <Head>
        <title>Directory</title>
      </Head>
      <h1 className="m-12 text-3xl">Directory</h1>
      <ul className="m-8 ml-20">
        {users.map((person: UserFromJSONPlaceHolder) => {
          return (
            <Link key={person.id} href={`/directory/${person.id}`}>
              <a className="flex items-center justify-around max-w-sm p-2 mb-6 text-center transition-all rounded shadow odd:bg-stone-200 odd:text-stone-700 odd:ml-4 even:bg-stone-400 even:text-stone-50 cursor-pointer hover:brightness-90">
                <MailIcon className="w-5 h-5" />
                <div>
                  <p>Name: {person.name}</p>
                  <p>Email: {person.email}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
