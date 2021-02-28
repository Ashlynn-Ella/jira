"use strict";
exports.__esModule = true;
exports.LoginScreen = void 0;
var auth_context_1 = require("context/auth-context");
var react_1 = require("react");
var antd_1 = require("antd");
exports.LoginScreen = function () {
    var login = auth_context_1.useAuth().login;
    var handleSubmit = function (values) {
        login(values);
    };
    return react_1["default"].createElement(antd_1.Form, { onFinish: handleSubmit },
        react_1["default"].createElement(antd_1.Form.Item, { name: "username", rules: [{ required: true, message: '请输入用户名' }] },
            react_1["default"].createElement(antd_1.Input, { placeholder: '\u8F93\u5165\u7528\u6237\u540D', type: "text", id: "username", autoComplete: "off" })),
        react_1["default"].createElement(antd_1.Form.Item, { name: 'password', rules: [{ required: true, message: '请输入密码' }] },
            react_1["default"].createElement(antd_1.Input, { placeholder: '\u8F93\u5165\u5BC6\u7801', type: "password", id: "password" })),
        react_1["default"].createElement("button", { type: "submit" }, "\u767B\u5F55"));
};
