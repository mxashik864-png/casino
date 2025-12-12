class User {
  constructor(data) {
    this.displayName = data.displayName || "";
    this.phone = data.phone || "";
    this.balance = data.balance || 0;
    this.referredBy = data.referredBy || null;
    this.isBanned = data.isBanned || false;
    this.createdAt = new Date();
  }
}

module.exports = User;
