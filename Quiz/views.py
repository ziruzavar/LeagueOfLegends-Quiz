from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
from django.core import serializers

from Quiz.models import TextQuestion


class QuizView(View):
    def get(self, request):
        questions = serializers.serialize('json', TextQuestion.objects.all())
        context = {
            'questions': questions,
        }
        return render(request, 'quiz.html', context)


class IndexView(TemplateView):
    template_name = 'landing_page.html'


class FinishView(View):
    def get(self, request):
        right = request.GET.get('right')

        query_set = TextQuestion.objects.all()
        context = {
            'right': int(right),
            'questions': {d.name: d.answer for d in query_set},
        }
        return render(request, 'finish_page.html', context)
