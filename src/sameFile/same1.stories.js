import style from "./style.css";

export default {
    title: "Same/Test1",
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
