import React from "react";
import { useSelector } from "react-redux";
import List from "./PaginationChild";

function DirectoryAlphabet() {
    const Gstate = useSelector((s) => s.entities.acudata.filter);

    return (
        <>
            <div className="pagination-wrapper mt-4 text-center">
                <ul className="pagination-list mycustomlist">
                    <List filter="all" activeFilter={Gstate} />
                    <List filter="a" activeFilter={Gstate} />
                    <List filter="b" activeFilter={Gstate} />
                    <List filter="c" activeFilter={Gstate} />
                    <List filter="d" activeFilter={Gstate} />
                    <List filter="e" activeFilter={Gstate} />
                    <List filter="f" activeFilter={Gstate} />
                    <List filter="g" activeFilter={Gstate} />
                    <List filter="h" activeFilter={Gstate} />
                    <List filter="i" activeFilter={Gstate} />
                    <List filter="j" activeFilter={Gstate} />
                    <List filter="k" activeFilter={Gstate} />
                    <List filter="l" activeFilter={Gstate} />
                    <List filter="m" activeFilter={Gstate} />
                    <List filter="n" activeFilter={Gstate} />
                    <List filter="o" activeFilter={Gstate} />
                    <List filter="p" activeFilter={Gstate} />
                    <List filter="q" activeFilter={Gstate} />
                    <List filter="r" activeFilter={Gstate} />
                    <List filter="s" activeFilter={Gstate} />
                    <List filter="t" activeFilter={Gstate} />
                    <List filter="u" activeFilter={Gstate} />
                    <List filter="v" activeFilter={Gstate} />
                    <List filter="w" activeFilter={Gstate} />
                    <List filter="x" activeFilter={Gstate} />
                    <List filter="y" activeFilter={Gstate} />
                    <List filter="z" activeFilter={Gstate} />
                </ul>
            </div>
        </>
    );
}

export default React.memo(DirectoryAlphabet);
