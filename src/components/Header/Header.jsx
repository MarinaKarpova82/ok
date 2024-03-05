import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegtam";
const {} = useTelegram();
const {user, onClose} = useTelegram();
const Header = () => {
    retorn (
        <div className={"header"}>
            <Button onClick={onClose} >Уйти</Button>
            <span className={"username"}>
                {user?.username}
            </span>

        </div>
    );
};

export default Header;