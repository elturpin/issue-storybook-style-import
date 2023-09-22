import style from "./style2.css";

export default {
    title: "Diff/Test2",
};

export const Primary = {
    render: () => `
    <style>
        ${style}
    </style>
    <div class="hey">
        <h1>This is another test</h1>
    </div>
    `,
};
