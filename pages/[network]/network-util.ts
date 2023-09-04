import { GetServerSidePropsContext } from "next/types";
import SDK, { internalGraphQLSDK, previewnetGraphQLSDK } from "../../sdk";

export const networkToSDK = (context: GetServerSidePropsContext) => {
    const network = context.query.network;
    if (typeof network !== "string") {
        throw new Error("Network name parameter is not a string.");
    }

    if (network === "9c-main") {
        return SDK;
    }

    if (network === "9c-internal") {
        return internalGraphQLSDK;
    }

    if (network === "9c-previewnet") {
        return previewnetGraphQLSDK;
    }

    throw new TypeError();
}
