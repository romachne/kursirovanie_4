from django.db.models import Q

from rest_framework.response import Response
from rest_framework import viewsets
from delivery.models import Restaurant, Dish
from delivery.permissions import IsOwnerOrReadOnly
from delivery.serializers import RestaurantSerializer, DishSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework import permissions


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):

        user = self.request.user
        return Restaurant.objects.filter(owner=user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

    @action(methods=['GET'], detail=True)
    def show_max_friendly_dish(self, request):
        queryset = Dish.objects.filter(Q(style__contains='friendly'))[:1].get()
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    @action(detail=False)
    def recent_user(self, request):
        recent_users = User.objects.all().order_by('-last_login')

        page = self.paginate_queryset(recent_users)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_users, many=True)
        return Response(serializer.data)


def api_root(request):
    return None
