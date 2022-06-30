from rest_framework import serializers
from django.contrib.auth.models import User
from delivery.models import Restaurant, Dish


class RestaurantSerializer(serializers.ModelSerializer):
    dishes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Restaurant
        fields = ['id', 'title', 'opened', 'dishes', 'owner']


class DishSerializer(serializers.ModelSerializer):

    def validate(self, data):
        if data['quantity'] == 0:
            raise serializers.ValidationError({'check quantity'})
        return data

    class Meta:
        model = Dish
        fields = ['id', 'title', 'quantity', 'style', 'restaurant']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', ]
