export interface ConversationRequest {
    message: string;
    conversationHistory: any[];
    // Added new property for selected index
    index_option: string;  // Type matches dropdown key type
}

// ... any other exports or code 