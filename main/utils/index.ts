export function createProxyUrl(server, port) {
    return port === 443 ? `https://${server}:${port}` : `http://${server}:${port}`
}
