import React from "react";

const defaultContext = {
    id: null,
    setId: () => {},
    chatId: null,
    setChatId: () => {}
};

export default React.createContext(defaultContext);