import React from "react";

const NamesContext = React.createContext()

const NamesProvider = NamesContext.Provider
const NamesConsumer = NamesContext.Consumer

export { NamesProvider, NamesConsumer }
