export const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const FullNameRegex = /^[a-zA-Z][a-zA-Z\s.'-]{1,}$/;

// password Explanation:

// (?=.*[a-z]) → Must contain at least one lowercase letter

// (?=.*[A-Z]) → Must contain at least one uppercase letter

// .{8,} → Minimum length of 8 characters (any character allowed, including special ones)

// ✅ Valid Examples:
// ReactJs@2024

// Welcome123!

// Test#Abcd

// 1Abcdefg@

// ❌ Invalid Examples:
// password → No uppercase

// PASSWORD → No lowercase

// abc123 → Too short, no uppercase

