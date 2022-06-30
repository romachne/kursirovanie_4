from django.db import models
from pygments.styles import get_all_styles

STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


class Restaurant(models.Model):
    title = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    opened = models.BooleanField(default=True)
    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)


class Dish(models.Model):
    restaurant = models.ForeignKey(Restaurant, related_name='dishes', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    quantity = models.IntegerField(default=1)
    style = models.CharField(choices=STYLE_CHOICES, default='pastie', max_length=100)


