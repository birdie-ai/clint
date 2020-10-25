import AWS from "aws-sdk";
import React, { Component } from "react";
AWS.config.update({ region: "us-east-1" });

type Props = {};
type State = {};

export default class TableMigrationUtil extends Component<Props, State> {
    // public static $ = new AWS.Lambda({ apiVersion: '2015-03-31' })

    constructor(props: Props) {
        super(props);

        this.state = {
            event: {},
            functions: [],
        } as State;
    }

    submit(data: string) {
        console.log(data);
    }
}
