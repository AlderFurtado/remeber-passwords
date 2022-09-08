import { storiesOf } from "@storybook/react-native";
import Container from "../../../src/components/Container";
import React from 'react';

storiesOf("Container", module)
    .add("Container simple", () => (
        <Container color={"blue"}/>
    ))