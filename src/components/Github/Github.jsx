import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
  const data = useLoaderData()
  // const [data, setdata] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setdata(data);
  //     });
  // }, []);

  return (
    <div className="flex flex-col w-full p-4 bg-zinc-600 text-white">
      followers: {data.followers}
      <img src={data.avatar_url} alt="" className="w-20" />
    </div>
  );
};

export default Github;
export const githubuser = async ()=>{
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}
