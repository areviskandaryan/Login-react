import React from "react";
import ReactDOM from "react-dom";
import styles from "./Inputs.module.css"

export default function Inputs({
                                   valueName, valueSurName,
                                   onHandleInputUpdateName,
                                   onHandleUpdateChangesName,
                                   onHandleUpdateChangesSurname,
                                   onHandleInputUpdateSurName,
                                   errorSurNameValue, errorNameValue
                               }) {
    return (
        <div className={styles.registerForm}>
            <div className={styles.registerContainer}>
                <label className={styles.label}>
                    Name
                    <input className={styles.inputName} type="text" value={valueName} onBlur={onHandleInputUpdateName}
                           onChange={onHandleUpdateChangesName}/>
                </label>
                {errorNameValue ? <p className={styles.error}>{errorNameValue}</p> : null}
                <label className={styles.label}>
                    Surname
                    <input className={styles.inputPassword} type="text" value={valueSurName}
                           onBlur={onHandleInputUpdateSurName}
                           onChange={onHandleUpdateChangesSurname}/>
                </label>

                {errorSurNameValue ? <p className={styles.error}>{errorSurNameValue}</p> : null}
            </div>
        </div>


    )
}


