import React from "react";
import { render } from "@testing-library/react";
import { describe, test, expect } from '@jest/globals';
import CardComponent from "./CardComponent";

describe('Card Component', () => {
    test('component did mount', () => {
        const { container } = render(<CardComponent />);
        expect(container.childElementCount).toBeGreaterThanOrEqual(1);
    });
});