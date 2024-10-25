from flask import Flask, request, jsonify
import model
# from` flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow
# import os

# init flask navigating class for our app

app = Flask(__name__)



@app.route('/get_news', methods=['GET'])
def news():
    category = request.args.get('category')
    news_dict = model.get_biased_news(category)
    return jsonify(news_dict)


# Get All users

# @app.route('/user', methods=['GET'])
# def get_all_users():
#     all_users = user.query.all()
#     return users_schema.jsonify(all_users)

# # Get Single user


# @app.route('/user/<int:id>', methods=['GET'])
# def get_user(id):
#     user = user.query.get(id)
#     return user_schema.jsonify(user)

# # Update user


# @app.route('/update_user/<int:id>', methods=['PUT'])
# def update_user(id):

#     # Fetching that user

#     user = user.query.get(id)

#     if user:

#         # Getting Values after Update

#         name = request.json['name']
#         description = request.json['description']
#         price = request.json['price']
#         qty = request.json['qty']

#         # Changing Value Of user

#         user.name = name
#         user.description = description
#         user.price = price
#         user.qty = qty

#         # Commiting change to DB

#         db.session.commit()

#         return user_schema.jsonify(user)

# # Delete user


# @app.route('/delete_user/<int:id>', methods=['DELETE'])
# def delete_user(id):

#     # Fetching user to be deleted

#     user = user.query.get(id)

#     # Deleteing
#     if user:
#         db.session.delete(user)
#         db.session.commit()

#         # Returning Remaining user

#         all_users = user.query.all()
#         return users_schema.jsonify(all_users)


# Run Server

if(__name__ == "__main__"):
    app.run(debug=True)
