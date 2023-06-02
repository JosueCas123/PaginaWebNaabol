import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";

export const Legal = () => {
  return (
    <>
      <Header />
      <section className="w-full p-12 bg-legal bg-cover bg-center ">
        <div className="w-11/12 mx-auto max-w-screen-2xl text-white text-3xl text-center font-bold my-6 lg:text-left lg:text-4xl">
          <h2>Leyes y Normas</h2>
        </div>
      </section>
      <section className="w-full">
        <div className="w-11/12 mx-auto max-w-screen-2xl my-8">
          <h3 className="font-bold  text-2xl text-center lg:text-right lg:text-3xl">
            Constitución Política del Estado Plurinacional de Bolivia
          </h3>
        </div>
        <div className="">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
      <Foot />
    </>
  );
};
