from rest_framework.urlpatterns import format_suffix_patterns
from delivery.views import RestaurantViewSet, DishViewSet, api_root, UserViewSet
from django.urls import path, include


def trigger_error(request):
    division_by_zero = 1 / 0


restaurant_list = RestaurantViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
restaurant_detail = RestaurantViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

dish_list = DishViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
dish_detail = DishViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})
user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})
recent_user = UserViewSet.as_view({
    'get': 'recent_user'
})
show_max_friendly_dish = DishViewSet.as_view({
    'get': 'show_max_friendly_dish'
})

urlpatterns = format_suffix_patterns([
    path('', api_root),
    path('sentry-debug/', trigger_error),
    path('restaurants/', restaurant_list, name='restaurant_list'),
    path('restaurants/<int:pk>/', restaurant_detail, name='restaurant_detail'),
    path('dishes/', dish_list, name='dish-list'),
    path('dishes/<int:pk>/', dish_detail, name='dish-detail'),
    path('users/', user_list, name='user-list'),
    path('users/<int:pk>/', user_detail, name='user-detail'),
    path('recent_user/', recent_user, name='recent_user'),
    path('show_max_friendly_dish/', show_max_friendly_dish, name='show_max_friendly_dish')
])

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
