import { CurlUIRenderElement, CurlUICSSProps } from "curlui/types";
export type ShowDialogProps = {
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
export declare function showDialog(properties: ShowDialogProps): string;
/**
 * Closes a dialog given its ID
 * @param dialogId
 */
export declare function closeDialog(dialogId: string): void;
export type ShowNotificationProps = {
    duration?: number;
    content: Array<CurlUIRenderElement> | CurlUIRenderElement;
};
/**
 * Displays a notification message
 * @param properties
 * @returns
 */
export declare function showNotification(properties: ShowNotificationProps): string;
/**
 * Closes a notification given its ID
 * @param notificationId
 */
export declare function closeNotification(notificationId: string): void;
export type ShowToastProps = {
    text: string;
    duration?: number;
    style?: CurlUICSSProps;
};
/**
 * Displays a toast message
 * @param properties
 * @returns
 */
export declare function showToast(properties: ShowToastProps): string;
/**
 * Closes a toast given its ID
 * @param toastId ID of the toast
 */
export declare function closeToast(toastId: string): void;
/**
 * Closes both navigation and menu drawers, if open
 */
export declare function closeDrawers(): void;
/**
 * Closes all current dialogs
 */
export declare function closeDialogs(): void;
/**
 * Closes all current notifications
 */
export declare function closeNotifications(): void;
/**
 * Closes all current toasts
 */
export declare function closeToasts(): void;
//# sourceMappingURL=index.d.ts.map