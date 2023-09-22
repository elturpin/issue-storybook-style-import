import style from "./style1.css";

export default {
    title: "Diff/Test1",
};

export const Primary = {
    render: () => `
    <style>
        ${style}
    </style>
    <div class="hey">
        <h1>This is a test</h1>
    </div>
    `,
};
