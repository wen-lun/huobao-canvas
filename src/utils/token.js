export const getApiKey = () => {
    // Get current provider | 获取当前渠道
    const currentProvider = localStorage.getItem('api-provider') || 'chatfire'
    // Get API keys from new storage | 从新存储结构获取 API Keys
    let apiKey = ''
    try {
        const apiKeysJson = localStorage.getItem('api-keys-by-provider')
        const apiKeys = apiKeysJson ? JSON.parse(apiKeysJson) : {}
        apiKey = apiKeys[currentProvider] || ''
    } catch (e) {
        apiKey = ''
    }
    return apiKey
}