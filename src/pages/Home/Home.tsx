/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from "react";
import { People } from "@/data";
import { useDispatch } from "react-redux";
import { PeopleTable } from ".";
import { addPeople } from "@/redux/states/people";
export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPeople(People));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PeopleTable />;
};

export default Home;
