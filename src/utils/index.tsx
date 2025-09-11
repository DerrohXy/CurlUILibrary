import { Classes, GetUniqueId, LoadContent, CustomEvents } from "../core";
import {
    CurlUIChildComponent,
    CurlUIRenderElement,
    CurlUICSSProps,
} from "curlui/types";
import { BiInfoSquare, BiXCircle } from "../icons/bi";
import { Render } from "curlui";

type ShowDialogProps = {
    duration?: number;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
    splash?: boolean;
    title?: string;
    closeOnClickOutside?: boolean;
    style?: CurlUICSSProps;
    titleBarStyle?: CurlUICSSProps;
    closeButton?: CurlUIRenderElement;
    icon?: CurlUIRenderElement;
};

/**
 * Displays a popup dialog box
 * @param properties
 * @returns
 */
export function showDialog(properties: ShowDialogProps) {
    closeDialogs();

    let content = LoadContent(properties.content),
        dialogId = GetUniqueId();

    let iconStyle = { fontSize: "25px", margin: "5px" };
    let baseElement = document.createElement("div");

    let element = (
        <div
            className={Classes.DIALOG}
            onclick={(event: Event) => {
                event.stopPropagation();
            }}
            style={properties.style || {}}
        >
            {properties.splash ? null : (
                <div className={Classes.DIALOG_TITLE_BAR}>
                    {properties.icon || (
                        <BiInfoSquare style={iconStyle}></BiInfoSquare>
                    )}
                    <span className={Classes.DIALOG_TITLE}>
                        {properties.title || "..."}
                    </span>
                    {properties.closeButton || (
                        <BiXCircle
                            style={iconStyle}
                            onclick={(event: Event) => {
                                event.stopPropagation();
                                closeDialog(dialogId);
                            }}
                        ></BiXCircle>
                    )}
                </div>
            )}
            {...content}
        </div>
    );

    baseElement.classList.add(Classes.DIALOG_WINDOW);
    baseElement.setAttribute("dialog-id", dialogId);

    if (properties.closeOnClickOutside === true) {
        baseElement.addEventListener("click", () => {
            closeDialog(dialogId);
        });
    }

    document.body.appendChild(baseElement);

    Render(element, baseElement);

    if (properties.duration && typeof properties.duration === "number") {
        setTimeout(() => {
            closeDialog(dialogId);
        }, properties.duration);
    }

    return dialogId;
}

/**
 * Closes a dialog given its ID
 * @param dialogId
 */
export function closeDialog(dialogId: string) {
    let element = document.querySelector(`[dialog-id="${dialogId}"]`);
    element?.parentNode?.removeChild(element);
}

type ShowNotificationProps = {
    duration?: number;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
};

/**
 * Displays a notification message
 * @param properties
 * @returns
 */
export function showNotification(properties: ShowNotificationProps) {
    closeNotifications();

    let content = LoadContent(properties.content),
        notificationId = GetUniqueId();

    let baseElement = document.createElement("div");

    let element = (
        <div
            className={Classes.NOTIFICATION}
            onclick={(event: Event) => {
                event.stopPropagation();
            }}
        >
            {...content}
        </div>
    );

    baseElement.setAttribute("notification-id", notificationId);
    document.body.appendChild(baseElement);

    Render(element, baseElement);

    setTimeout(() => {
        closeNotification(notificationId);
    }, properties.duration || 3000);

    return notificationId;
}

/**
 * Closes a notification given its ID
 * @param notificationId
 */
export function closeNotification(notificationId: string) {
    let element = document.querySelector(
        `[notification-id="${notificationId}"]`
    );

    element?.parentNode?.removeChild(element);
}

type ShowToastProps = {
    text: string;
    duration?: number;
    style?: CurlUICSSProps;
};

/**
 * Displays a toast message
 * @param properties
 * @returns
 */
export function showToast(properties: ShowToastProps) {
    closeToasts();

    if (!properties.text) {
        return;
    }

    let toastId = GetUniqueId(),
        baseElement = document.createElement("div");

    baseElement.classList.add(Classes.TOAST);
    baseElement.setAttribute("toast-id", toastId);
    baseElement.textContent = properties.text;

    Object.assign(baseElement.style, properties.style || {});
    document.body.appendChild(baseElement);
    setTimeout(() => {
        closeToast(toastId);
    }, properties.duration || 3000);

    return toastId;
}

/**
 * Closes a toast given its ID
 * @param toastId ID of the toast
 */
export function closeToast(toastId: string) {
    let element = document.querySelector(`[toast-id="${toastId}"]`);
    element?.parentNode?.removeChild(element);
}

/**
 * Closes both navigation and menu drawers, if open
 */
export function closeDrawers() {
    window.dispatchEvent(
        new CustomEvent(CustomEvents.CLOSE_DRAWERS_REQUEST, { detail: {} })
    );
}

/**
 * Closes all current dialogs
 */
export function closeDialogs() {
    document.querySelectorAll("[dialog-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}

/**
 * Closes all current notifications
 */
export function closeNotifications() {
    document.querySelectorAll("[notification-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}

/**
 * Closes all current toasts
 */
export function closeToasts() {
    document.querySelectorAll("[toast-id]").forEach((element) => {
        element?.parentNode?.removeChild(element);
    });
}
