# 🔐 Authentication

## 1. Register Doctor (Public)

```http
POST /auth/register/doctor
```

**Request Body**

```json
{
  "username": "string",
  "password": "string",
  "confirmPassword": "string",
  "specialization": "string"
}
```

**Response Body**

```json
{
  "message": "Register doctor Successfully"
}
```

## 2. Register User (Public)

```http
POST /auth/register/user
```

**Request Body**

```json
{
  "username": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response Body**

```json
{
  "message": "Register user Successfully"
}
```

## 3. Login Doctor (Public)

```http
POST /auth/login/doctor
```

**Request Body**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response Body**

```json
{
  "id": 1,
  "username": "username",
  "specialization": "string",
  "accessToken": "token"
}
```

## 4. Login User (Public)

```http
POST /auth/login/user
```

**Request Body**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response Body**

```json
{
  "id": 1,
  "username": "username",
  "accessToken": "token"
}
```

# 👤 User Management

## 5. Get User Profile (User)

```http
GET /users/me
```

**Response**

```json
{
  "id": "number",
  "username": "string"
}
```

## 6. Update User Profile (User)

```http
PATCH /users/me
```

**Request Body**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response Body**

```json
{
  "id": 1,
  "username": "username"
}
```

# 👨‍⚕️ Doctor Management

## 7. Get Doctor Profile (Doctor)

```http
GET /doctors/me
```

**Response**

```json
{
  "id": "number",
  "username": "string",
  "specialization": "string"
}
```

## 8. Update Doctor Profile (Doctor)

```http
PATCH /doctors/me
```

**Request Body**

```json
{
  "username": "string",
  "password": "string",
  "specialization": "string"
}
```

**Response Body**

```json
{
  "id": 1,
  "username": "username",
  "specialization": "string"
}
```

# 📊 Health Records

## 9. Create Health Record (User)

```http
POST /health-records
```

**Request Body**

```json
{
  "type": "string",
  "value": "string"
}
```

**Response Body**

```json
{
  "message": "create health record successfully"
}
```

## 10. Get User's Health Records (User)

💡**Important:** This Endpoint for get all Health Records of own

```http
GET /health-records
```

**Query Parameters**

- `from`: วันที่เริ่มต้น (YYYY-MM-DD)
- `to`: วันที่สิ้นสุด (YYYY-MM-DD)

**Response Body**

```json
[
  {
    "id": 1,
    "userId": 1,
    "type": "type",
    "value": "value",
    "date": "date"
  }
]
```

## 11. Get User's Health Records By id (User)

```http
GET /health-records/:id
```

**Response Body**

```json
{
  "id": 1,
  "userId": 1,
  "type": "type",
  "value": "value",
  "date": "date"
}
```

## 12. Update User's Health Records (User)

```http
PATCH /health-records/:id
```

**Request Body**

```json
{
  "type": "type",
  "value": "value"
}
```

**Response Body**

```json
{
  "id": 1,
  "userId": 1,
  "type": "type",
  "value": "value",
  "date": "date"
}
```

## 13. Delete User's Health Records (User)

```http
DELETE /health-records/:id
```

**Response Body**

```json
{}
```

# 📝 Doctor Notes

## 14. Create Note (Doctor)

```http
POST /doctor-notes
```

**Request Body**

```json
{
  "userId": "number",
  "note": "string"
}
```

**Response Body**

```json
{
  "message": "create doctor notes successfully"
}
```

## 15. Get Notes (Doctor)

💡**Important:** This Endpoint for doctor to get all Note of own

```http
GET /doctor-notes/my-notes
```

**Response Body**

```json
[
  {
    "id": 1,
    "doctorId": 1,
    "userId": 1,
    "Note": "Note",
    "createdAt": "date time"
  }
]
```

## 16. Get Notes For Patient (Doctor)

💡**Important:** This Endpoint for doctor to get all Note of specific user

```http
GET /doctor-notes/user/:userId
```

**Response Body**

```json
[
  {
    "id": 1,
    "doctorId": 1,
    "userId": 1,
    "Note": "Note",
    "createdAt": "date time"
  }
]
```

## 17. Get Received Notes (User)

💡**Important:** This Endpoint for user to get all Note of own

```http
GET /doctor-notes/received
```

**Response Body**

```json
[
  {
    "id": 1,
    "doctorId": 1,
    "userId": 1,
    "Note": "Note",
    "createdAt": "date time"
  }
]
```

## 18. Update Notes For Patient (Doctor)

```http
PATCH /doctor-notes/:id
```

**Request Body**

```json
{
  "note": "note"
}
```

**Response Body**

```json
{
  "id": 1,
  "doctorId": 1,
  "userId": 1,
  "note": "note",
  "createdAt": "Date Time"
}
```

## 19. Delete Notes For Patient (Doctor)

```http
DELETE /doctor-notes/:id
```

**Response Body**

```json
{}
```

## ⚠️ Error Responses

### 401 Unauthorized

```json
{
  "error": "Authentication required"
}
```

### 403 Forbidden

```json
{
  "error": "You don't have permission to perform this action"
}
```

### 404 Not Found

```json
{
  "error": "Resource not found"
}
```
