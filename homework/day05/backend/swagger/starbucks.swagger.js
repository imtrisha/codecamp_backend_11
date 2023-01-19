/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
 *     parameters:
 *       - in: query
 *         name: number
 *         type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   number:
 *                     type: int
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "아메리카노"
 *                   kcal:
 *                     type: int
 *                     example: 5
 */
