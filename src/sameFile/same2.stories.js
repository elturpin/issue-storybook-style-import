import style from "./style.css";

export default {
    title: "Same/Test2",
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
